import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        try {
            const stored = window.localStorage.getItem(key);
            return stored !== null ? stored : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, value ?? "");
        } catch { }
    }, [key, value]);

    return [value, setValue];
}
