import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    /* eslint-disable-next-line no-throw-literal */
                    throw new FetchError({
                        //err: true, //promoted as getter
                        status: res.status,
                        statusText: res.statusText
                            ? res.statusText
                            : "An error has ocurred",
                    });
                }
                const data = await res.json();

                setData(data);
                setIsPending(false);
                setError({ err: false });
            } catch (e) {
                setError(e);
                setIsPending(true);
            }
        }
        getData();
    }, [url]);

    return {
        data,
        isPending,
        error,
    };
}

/**
 * Represents an inmutable HTTP remote fetch error.
 * It could act as base class of other more specific.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
 */
export class FetchError extends Error {
    // as private fields (encapsulation)
    #status;
    #statusText;

    constructor({ status, statusText }, ...params) {
        // provide toString() message and
        // pass remaining arguments (including vendor specific ones) to parent constructor
        super(`E${status}: ${statusText}`, ...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FetchError);
        }

        this.#status = status;
        this.#statusText = statusText;
    }

    /**
     * The inmutable name error itself with extensibility support.
     * ex. Eg in this context: `FetchError`.
     * @return string
     */
    get name() {
        return this.constructor.name;
    }

    /**
     * Converts this class instances to JSON string.
     * `JSON.stringify()` calls this mixin when marshalling to JSON.
     * @return string
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior
     */
    toJSON(/*key*/) {
        // start with an empty object
        const jsonObj = {};
        // or emit all properties and all fields
        //        const jsonObj = Object.assign({}, this);

        // add all getter properties
        const proto = Object.getPrototypeOf(this);
        for (const key of Object.getOwnPropertyNames(proto)) {
            const descriptor = Object.getOwnPropertyDescriptor(proto, key);
            const hasGetter =
                descriptor && typeof descriptor.get === "function";
            if (hasGetter) {
                jsonObj[key] = descriptor.get();
            }
        }

        return jsonObj;
    }

    /**
     * An exportable JSON mark. Always true.
     * @return bool
     */
    get error() {
        return true;
    }

    /**
     * Property with the HTTP response status code.
     * @return number
     */
    get status() {
        return this.#status;
    }

    /**
     * Property with the HTTP response status message.
     * @return number
     */
    get statusText() {
        return this.#statusText;
    }
}
