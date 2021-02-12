# F1 weather tracker

View live version of the website [here](placeholder).

Milestone Project 2: Interactive Front-end Development – [Code Institute](https://codeinstitute.net/)

This website was made as my second milestone project for the Code Institute course. The website was created to provide event specific information about the track, the event schedule and especially the weather conditions shortly before the race start for upcoming race events in the 2021 Formula 1 calendar. The project requirements were to create an interactive front-end website using HTML, CSS and JavaScript.

**Remark: because of time restraints I had to change the scope of the project, my initial plan was way too ambitious and required thousands of pieces of data. It would have cost me months to finish, so at the 14th git commit on the 12th of February 2021 I changed the scope and documentation.**

![Website example](file-location-placeholder)

---

## Contents

- [**User Experience Design (UXD)**](#user-experience-design-uxd)

  - [Strategy](#strategy)
    - Goal
    - User stories
  - [Scope](#scope)
    - Functional specifications
    - Content requirements
  - [Structure](#structure)
    - Information architecture
    - Interaction design
  - [Skeleton](#skeleton)
    - Wireframes
  - [Surface](#surface)
    - Colours
    - Typography
    - Uniformity

- [**Features**](#features)

  - Existing features
  - Future features

- [**Technologies**](#technologies)

  - Languages
  - Frameworks
  - Libraries
  - Software

- [**Testing**](#testing)

- [**Deployment**](#deployment)

  - Hosting online
  - Running locally

- [**Credits**](#credits)

  - Code
  - Text
  - Media
  - Miscellaneous
  - Acknowledgements

- [**Notes**](#notes)

---

## User experience design (UXD)

### Strategy

#### Goal

The goal for the website is to provide Formula 1 fans with a single place that contains event specific (weather) information for upcoming races in the 2021 Formula 1 calendar.

#### User stories

- As a **visitor**, I would like **to see a schedule of the Formula 1 calendar**, so that **I know where and when the next event takes place**.

- As a **visitor**, I would like **to know when track sessions are supposed to start**, so that **I can prevent missing the session by accident**.

- As a **visitor**, I would like **to see race event specific weather information**, so that **I can estimate how the weather might influence the track sessions**.

- As a **site owner**, I would like our website **to have an intuitive navigation system**, so that **visitors can easily switch between different race events**.

### Scope

#### Functional specifications

The website should have navigation to switch between race events on the calendar. On tablet and/or mobile there should be navigational buttons to switch between the different sections of information. Content on the website should support different screen sizes. Wherever appropriate and or possible, visible indicators should be shown to users when they can perform an action on the website (like clicking a link or a button).

#### Content requirements

The website needs to display the Formula 1 race calendar for the 2021 season. The website needs to provide weather information relevant to the race time frame for upcoming race events. The website needs to provide the time schedule for each event. The website needs to provide relevant track information for each event.

### Structure

#### Information architecture

This website uses a single page layout, so everything is either visible already or at maximum 2 clicks away depending on your device. On smaller screen sizes you will be able to switch between different sections of information by clicking a button. To see a visual sitemap [click here](wireframes-new/visual-sitemap.png).

#### Interaction design

Users can click on a race calendar event to display information relevant to that event. Depending on their device, users could see through visible indicators like changes of colour and/or changing mouse pointers whether something is clickable. Users can also see which events have already taken place through colour indications. Users with touchscreens can swipe up and down to scroll through the page, and they can (double)tap to select race event and browse through the information displayed on the website. If a weather radar is implemented users should be able to pause and play the footage with a single tap or click. A button might be implemented that lets users switch between Celsius and Fahrenheit with a single tap or click. No audio will be used in this website.

### Skeleton

On bigger screen sizes the entire race calendar will be positioned on the left of the page. On the right side of the page all the information for the selected race event will be displayed. On the top of the right side is a race countdown timer. Below that are the track information and time schedule displayed side by side. Below that a 4 hour weather forecast and the local time are displayed. On smaller screen sizes only the selected calendar event is displayed. Below it is the race countdown timer. Below that several buttons are displayed to switch between the different sections of information and there is also a button to switch between Celsius and Fahrenheit. Below that the currently selected section of information is displayed.

Before starting to code I decided to create a quick skeleton mock-up which you can see by [clicking here](wireframes-new/skeleton-mockup.png)

#### Wireframes

To see all the wireframes in a single PDF [click here](wireframes-new/f1weather-ALL-wireframes-PDF.pdf).

To see separate image files of the wireframes check the wireframes-new/seperate-wireframe-images folder.

### Surface

#### Colours

My initial plan regarding the colour scheme is to use a grey and yellow colour palette with red as a supplementary option. I will add an image of the exact colour scheme later when I've made my final decisions.

![Colour palette](file-location-placeholder)

#### Typography

My initial plan regarding the typography is to use at least 2 different font-styles to separate the weather data from the other content. I will add my final choices later, after I've tested which ones provide the best distinction and readability.

#### Uniformity

To keep the website looking uniform I'm trying to make sure that all related contents throughout the website are consistent in font size and styling. The positioning of elements and contents should be consistent in height, padding and spacing. I'm also using either grid, flexbox or both to present the content in a logical order.

**_[Back to top](#contents)_**

---

## Features

### Existing features

#### General features

**Top (navigation) bar**:

- Will always be visible at the top of the page.
- Has the name of the website in the center.

**Race calendar**:

- Will be displayed left on the page on large screen sizes. On smaller screen sizes a single calendar event will be displayed below the top (navigation) bar.
- A country flag, race location and date are displayed. Additionally a hamburger menu icon will be displayed on smaller screen sizes.
- There are 23 rows, one for each event on the 2021 Formula 1 race calendar.
- When you hover an event item with the mouse the color(s) and mouse pointer change.
- When an event has taken place the color(s) change.
- Clicking on an event item changes the information displayed in the race countdown timer, track information, event time schedule and 4 hour weather forecast features.
- On smaller screen sizes the calendar can be displayed by a single tap/click on a race event item.

**Race countdown timer**:

- Will be displayed below the top (navigation) bar.
- A countdown to the race start for the currently selected race event showing the days, hours and minutes is displayed.

**Track information**:

- Will be displayed below the race countdown timer on large screen sizes. On smaller screen sizes the track information can be displayed below the button dashboard.
- Track name, track map, total number of race laps, track length and track record of the currently selected race event are displayed.

**Event time schedule**:

- Will be displayed below the race countdown timer and right of the track information features on large screen sizes. On smaller screen sizes the event time schedule can be displayed below the button dashboard.
- Track session times of the currently selected race event are displayed in the local time of the event location.

**4 hour weather forecast**:

- Will be displayed below the track information and event time schedule features on large screen sizes. On smaller screen sizes the 4 hour weather forecast can be displayed below the button dashboard.
- The location, the current local time and the local start time of the race are displayed.
- Textual weather forecast information for the next 4 hours around the race start time at the selected race event location are displayed.

**Button dashboard**:

- Only visible at smaller screen sizes, will be displayed below the race countdown timer.
- There are 4 buttons, clicking on them changes which type of feature section is displayed below or changes between Celsius or Fahrenheit.

#### Page specific features

None, the website uses a single page layout.

### Future features

- An actual 3 hour rainfall forecast radar could be added to create a 3 hour weather forecast feature.

- A 24 hour weather forecast feature could be added.

- A 7 day weather forecast feature could be added.

- A second page could be added where visitors can select race locations that are not on the current Formula 1 calendar.

- A feature that allows visitors to get email notifications several days prior to a race events could be added.

**_[Back to top](#contents)_**

---

## Technologies

### Languages

placeholder text

### Frameworks

placeholder text

### Libraries

placeholder text

### Software

placeholder text

**_[Back to top](#contents)_**

---

## Testing

A separate file with testing information can be found [here](file-location-placeholder).

**_[Back to top](#contents)_**

---

## Deployment

### Hosting online

placeholder text

### Running locally

placeholder text

**_[Back to top](#contents)_**

---

## Credits

placeholder text

### Code

placeholder text

### Miscellaneous

placeholder text

### Acknowledgements

placeholder text

**_[Back to top](#contents)_**

---

## Notes

- A

- B

- C

**_[Back to top](#contents)_**

---
