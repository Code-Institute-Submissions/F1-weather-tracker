# F1 weather tracker

View live version of the website [here](placeholder).

Milestone Project 2: Interactive Front-end Development – [Code Institute](https://codeinstitute.net/)

This website was made as my second milestone project for the Code Institute course. The website was created to track the weather conditions for upcoming race events in the 2021 Formula 1 calendar, starting within 7 days leading up to the event. The project requirements were to create an interactive front-end website using HTML, CSS and JavaScript.

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

The goal for the website is to provide Formula 1 fans with a single place that contains all the relevant weather information for upcoming races in 2021 Formula 1 calendar.

#### User stories

- As a **visitor**, I would like **to see a schedule of the Formula 1 calendar**, so that **I know where and when the next event takes place**.

- As a **visitor**, I would like **to know when track sessions are suppose to start in my local time**, so that **I can prevent missing the session by accident**.

- As a **visitor**, I would like **to see race event specific weather information**, so that **I can estimate how the weather might influence the track sessions**.

- As a **site owner**, I would like our website **to have an intuitive navigation system**, so that **visitors can easily switch between different race events**.

### Scope

#### Functional specifications

The website should have navigation to switch between race events on the calendar. On tablet and/or mobile there should be navigational buttons to switch between different durations of weather forecasts. Content on the website should support different screen sizes. Wherever appropriate and or possible, visible indicators should be shown to users when they can perform an action on the website (like clicking a link or a button).

#### Content requirements

The website needs to display the Formula 1 race calendar for the 2021 season. The website needs to provide relevant weather information for upcoming race events. The website needs to provide the times for track sessions in the visitor's local time.

### Structure

#### Information architecture

This website uses a single page layout, so everything is either visible already or at maximum 2 clicks away depending on you device. On smaller screen sizes you will be able to switch between 3 hour, 24 hour and 7 day weather forecasts by clicking a button. To see a visual sitemap [click here](wireframes/visual-sitemap.png).

#### Interaction design

Users can click on a race calendar event to display information relevant to that event. Depending on their device, users could see through visible indicators like changes of colour and/or changing mouse pointers whether something is clickable. Users can also see which events have already taken place through colour indications. Users with touchscreens can swipe up and down to scroll through the page and they can (double)tap to select race event and browse through the information displayed on website. If a weather radar is implemented users should be able to pause and play the footage with a single tap or click. A button might be implemented that lets users switch between Celsius and Fahrenheit with a single tap or click. No audio will be used in this website.

### Skeleton

On bigger screen sizes the entire race calendar will be positioned on the left of the page. On the right side of the page all the information for the selected race event will be displayed. On the top of the right side is a race countdown timer. Below that are the track information, track sessions schedule and the 3 hour weather forecast displayed side by side. Below that the 24 hour weather forecast and 7 days weather forecast are displayed. On smaller screen sizes only the selected calendar event is displayed. Below it is the race countdown timer. Below that are the track information and track sessions schedule side by side. Below that several buttons are displayed to switch between the various weather forecasts. On even smaller screen sizes the track information and track sessions schedule are below all the other mentioned content.

#### Wireframes

To see all the wireframes in a single PDF [click here](wireframes/f1weather-ALL-wireframes-PDF.pdf).

To see seperate image files of the wireframes check the wireframes/seperate-wireframe-images folder.

### Surface

#### Colours

My initial plan in regards to the colour scheme is to use a grey and yellow colour palette with red as a supplementary option. I will add an image of the exact colour scheme later when I've made my final decisions.

![Colour palette](file-location-placeholder)

#### Typography

My initial plan in regards to the typography is to use at least 2 different font-styles to seperate the weather data from the other content. I will add my final choices later, after I've tested which ones provide the best distinction and readability.

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
- Has a hamburger menu icon on the right side on smaller screen sizes. Clicking on the hamburger menu icon displays the 2021 Formula 1 race calendar.

**Race calendar**:

- Will be displayed left on the page on large screen sizes. On smaller screen sizes the calendar can be displayed by a single tap/click on the hamburger menu icon.
- A country flag, race location and date are displayed.
- There are 23 rows, one for each event on the 2021 Formula 1 race calendar.
- When you hover an event item with the mouse the color(s) and mouse pointer change.
- When an event has taken place the color(s) change.
- Clicking on an event item changes the information displayed in the X, Y and Z features.

**Race countdown timer**:

- Will be displayed below the top (nagivation) bar.
- A countdown to the race start for the currently selected race event showing the days, hours and minutes is displayed.

**Track information**:

- Will be displayed below the race countdown timer on large screen sizes. On smaller screen sizes the track information will be displayed below the weather information.
- Track name, track map, total number of race laps, track length and track record of the currently selected race event are displayed.

**Event time schedule**:

- Will be displayed below the race countdown timer and right of the track information on large screen sizes. On smaller screen sizes the event time schedule will be displayed below the weather information.
- Track session times of the currently selected race event are displayed in the visitors local time.

**3 hour weather forecast**:

- Will be displayed below the race countdown timer and right of the event time schedule on large screen sizes. On smaller screen sizes the 3 hour weather forecast will be displayed below the weather forecast navigational buttons.
- Either a weather radar or textual weather forecast information for the next 3 hours at the selected race event location are displayed.
- If there is a weather radar displayed then you can possibly play or pause the footage with a single click or tap.

**24 hour weather forecast**:

- Will be displayed below the track information and the event time schedule and right of the race calendar on large screen sizes. On smaller screen sizes the 24 hour weather forecast will be displayed below the weather forecast navigational buttons.
- Textual weather forecast information such as the temperature and precipitation for the next 24 hours at the selected race event location are displayed on a per hour basis.

**7 days weather forecast**:

- Will be displayed below the 3 hour weather forecast and right of the 24 hour weather forecast on large screen sizes. On smaller screen sizes the 7 days weather forecast will be displayed below the weather forecast navigational buttons.
- Textual weather forecast information such as the minimal temperature, maximum temperature, weather discription and precipitation for the next 7 days at the selected race event location are displayed on a per day basis.

#### Page specific features

None, the website uses a single page layout.

### Future features

- An actual 3 hour rainfall forecast radar could be added to the 3 hour weather forecast feature to replace the textual weather forecast information.

- A second page could be added where visitors can select race locations that are not on the current Formula 1 calendar.

- Percentage based chance of rain data could be added to both the 24 hour and the 7 days weather forecast sections.

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
