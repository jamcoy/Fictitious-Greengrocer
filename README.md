#Fictitious Greengrocer

Code Institute stream 1 project.

View here:
[https://stream1.jamcoy.com](https://stream1.jamcoy.com)

##About
The Fictitious Greengrocer is a website that showcases the products and services offered by a fictional high street greengrocer.

##Requirements
- Showcase the produce on offer in-store.
- Encourage return visits to the store and the website by publishing news articles and details of upcoming events, with the user able to subscribe to this information.
- Provide store location details, contact details and a contact form.
- Encourage and enable business users to subscribe to regular deliveries of fruit.
- The site must be of a responsive design:  it must work well on a variety of devices.

##Approach
A wireframe / mock-up of the website was built using Balsamiq and issued to the client (my mentor) for feedback.  Once approved, development commenced, using the technologies described below.  Since the project relates solely to the ‘Frontend’, data that would usually be handled by a database was instead read from JSON files.
Github was used for  source control.

##Technologies
- **HTML5** markup has been written to use semantic elements.
- **AngularJS** was used as the javascript framework.
- **Bootstrap** was used to provide a responsive framework.  This was enhanced with media queries in the style sheet.
- **All images** have been sourced from StockSnap.io, Unsplash.com and Pixabay.com and are free to use.  Each image was edited, resized and suitably compressed using either JPEG compression or colour indexing with lossless compression.
- **The video** was edited and rendered using kdenlive.  The ogv version was compressed using VLC.

##Hosting
The website is hosted on a private server (Debian) using Nginx as the webserver, configured to use gzip compression and TLS encryption.

##Notes
- Due to this being a fictitious website, social media buttons are not active.
- If running locally, change the 'prefix url' variable in the controller.