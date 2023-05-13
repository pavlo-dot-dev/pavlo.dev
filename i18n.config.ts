import en from "@/locales/en.json";
import ua from "@/locales/ua.json";
import ru from "@/locales/ru.json";

export default defineI18nConfig(() => ({
    messages: {
        en,
        ua,
        ru
    }
}))