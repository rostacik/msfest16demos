import { greet } from "./greeter";
import $ = require("jquery");

$(() => {
    $(document.body).html(greet("Ahoj MS FEST!!!!"));
});