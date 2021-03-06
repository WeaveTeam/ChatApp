import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jQuery from "jquery";
import ChatWebAPIUtils from "./ts/util/ChatWebAPIUtils";
import * as ChatExampleData from "./ts/ChatExampleData";
import ChatApp from "./ts/component/ChatApp";
var $ = jQuery.default;
$(function () {
    ChatExampleData.init();
    ChatWebAPIUtils.getAllMessages();
    ReactDOM.render(<ChatApp />, document.getElementById("chat-app"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU87T0FDdkIsS0FBSyxRQUFRLE1BQU0sV0FBVztPQUM5QixLQUFLLE1BQU0sTUFBTSxRQUFRO09BQ3pCLGVBQWUsTUFBTSwyQkFBMkI7T0FDaEQsS0FBSyxlQUFlLE1BQU0sc0JBQXNCO09BQ2hELE9BQU8sTUFBTSx3QkFBd0I7QUFFNUMsSUFBSSxDQUFDLEdBQUksTUFBYyxDQUFDLE9BQU8sQ0FBQztBQUVoQyxDQUFDLENBQUM7SUFDRCxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgQ2hhdFdlYkFQSVV0aWxzIGZyb20gXCIuL3RzL3V0aWwvQ2hhdFdlYkFQSVV0aWxzXCI7XG5pbXBvcnQgKiBhcyBDaGF0RXhhbXBsZURhdGEgZnJvbSBcIi4vdHMvQ2hhdEV4YW1wbGVEYXRhXCI7XG5pbXBvcnQgQ2hhdEFwcCBmcm9tIFwiLi90cy9jb21wb25lbnQvQ2hhdEFwcFwiO1xuXG52YXIgJCA9IChqUXVlcnkgYXMgYW55KS5kZWZhdWx0O1xuXG4kKGZ1bmN0aW9uICgpIHtcblx0Q2hhdEV4YW1wbGVEYXRhLmluaXQoKTtcblx0Q2hhdFdlYkFQSVV0aWxzLmdldEFsbE1lc3NhZ2VzKCk7XG5cdFJlYWN0RE9NLnJlbmRlcig8Q2hhdEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtYXBwXCIpKTtcbn0pO1xuIl19