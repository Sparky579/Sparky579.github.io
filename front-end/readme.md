# Conference Rooms Management

This application allows you to manage conference rooms, offering functionalities to add, edit, and delete rooms. The app is built using Vue.js and its UI is styled using an external stylesheet `styles.css`.

## Features

1. **List Conference Rooms**: Displays a table of conference rooms with details such as Room Name, Department, Type, Location, Date, Start Time, End Time, and Maximum Duration.
2. **Add Conference Room**: Provides a form to add a new conference room. You can choose the type of room, associated department, date, start time, end time, location, and maximum duration.
3. **Edit Conference Room**: Allows you to edit the details of an existing conference room.
4. **Delete Conference Room**: Lets you delete a conference room from the list.

## Prerequisites

- Vue.js (v3)
- Lodash (v4.17.21)

These libraries are already imported via CDNs in the provided code.

## Setup

1. Save the provided HTML content to a file named `index.html`.
2. Add the required CSS styles to `styles.css`. This stylesheet is linked in the `index.html` file.
3. Open the `index.html` file in a web browser to see the application in action.

## Usage

- **View Rooms**: Simply browse the table on the main page.
- **Add a Room**: Click the "Add Room" button and fill out the form. Once completed, click "Submit".
- **Edit a Room**: Click the "Edit" button next to the room you want to modify. The form will be populated with the room's details. Make the necessary changes and click "Submit".
- **Delete a Room**: Click the "Delete" button next to the room you wish to remove.

## Validation

- The application ensures that end time is not earlier than the start time when adding or editing a room.
- The room information is validated to ensure it's not empty.

## Development

If you wish to extend or modify the application, you can edit the JavaScript block present at the end of the `index.html` file. The main app logic is defined there using Vue.js.

## Contributing

Contributions are welcomed. Please submit a PR with your proposed changes for review.

## License

This project is open-source. Please make sure to give credit when using or redistributing.