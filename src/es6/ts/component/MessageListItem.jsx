import * as React from "react";
export default class MessageListItem extends React.Component {
    render() {
        var message = this.props.message;
        return (<li className="message-list-item">
				<h5 className="message-author-name">{message.authorName}</h5>
				<div className="message-time">
					{message.date.toLocaleTimeString()}
				</div>
				<div className="message-text">{message.text}</div>
			</li>);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUxpc3RJdGVtLmpzeCIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RzL2NvbXBvbmVudC9NZXNzYWdlTGlzdEl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU87QUFhOUIsNkNBQTZDLEtBQUssQ0FBQyxTQUFTO0lBRzNELE1BQU07UUFFTCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxNQUFNLENBQUMsQ0FDTixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQ2hDO0lBQUEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FDNUQ7SUFBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUM1QjtLQUFBLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUNuQztJQUFBLEVBQUUsR0FBRyxDQUNMO0lBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQ2xEO0dBQUEsRUFBRSxFQUFFLENBQUMsQ0FDTCxDQUFDO0lBQ0gsQ0FBQztBQUNGLENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZXNzYWdlU3RhdGV9IGZyb20gXCIuLi9NZXNzYWdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUxpc3RJdGVtUHJvcHNcbntcblx0bWVzc2FnZTpNZXNzYWdlU3RhdGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlTGlzdEl0ZW1TdGF0ZVxue1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNZXNzYWdlTGlzdEl0ZW1Qcm9wcywgTWVzc2FnZUxpc3RJdGVtU3RhdGU+XG57XG5cblx0cmVuZGVyKClcblx0e1xuXHRcdHZhciBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVzc2FnZS1saXN0LWl0ZW1cIj5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYXV0aG9yLW5hbWVcIj57bWVzc2FnZS5hdXRob3JOYW1lfTwvaDU+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10aW1lXCI+XG5cdFx0XHRcdFx0e21lc3NhZ2UuZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS10ZXh0XCI+e21lc3NhZ2UudGV4dH08L2Rpdj5cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSJdfQ==