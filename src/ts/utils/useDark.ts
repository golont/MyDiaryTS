import cn from "classnames";
import { useTheme } from "./app";

export const useDarkTheme = (classes: string): string => {
    const names: string[] = classes.split(" ");
    const { isDark } = useTheme();
    const name = `${names[0]}-dark`;
    return cn(names, { [name]: isDark });
};
