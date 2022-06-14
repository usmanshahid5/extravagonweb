import React from 'react';

class HowToRent extends React.Component {
  render() {
    return (
      <main className="center col-12">
        <div className="col-r-8-12 col-xl-r-10-12 col-full-hd-r-10-12 col-m-fw center t-l faq-cke faq-cke-indentation">
          <div className="faq-cke__title t-xl title-d-1 b-s">
            How to rent a car
          </div>
          <p>It&rsquo;s easy to use ExtraVagant to find your next dream ride to rent. Here&rsquo;s how:</p>

          <ol>
            <li>Search for cars by&nbsp;location.&nbsp;</li>
            <li>Filter your results further by Make and Model, Price per day, Transmission type and Rental type. Use
              the map icon to view each vehicle&#39;s specific location.
            </li>
            <li>Select the car you want and choose the rental type (not all types available on all cars):
              <ul>
                <li>Driving Rental: You drive the car</li>
                <li>Event Rental: Car is used for display only</li>
                <li>Chauffeured Rental: Owner or hired chauffeur drives the car</li>
              </ul>
            </li>
            <li>Check the vehicle&#39;s&nbsp;availability. Choose your dates and times, review specific details under
              the &ldquo;Policies&rdquo; tab.
            </li>
            <li>Either contact the owner with any questions by clicking on the message icon, or request a reservation
              by clicking &ldquo;Reserve a car.&rdquo;&nbsp;</li>
          </ol>

          <p>&nbsp;</p>

          <p>Tips:</p>

          <ul>
            <li><em>You must register on ExtraVagant before you can reserve a car.&nbsp;</em></li>
            <li><em>All drivers need to by 25 years of age or older to rent from ExtraVagant.</em></li>
            <li><em>The first time you book a driving rental, the results from the driver verification could take up
              to 72 hours, so make sure you&rsquo;ve given yourself enough time before your desired trip.</em></li>
          </ul>

          <p>Questions? We&rsquo;re here to help. Contact <a
            href="mailto:support@ExtraVagant.com">support@ExtraVagant.com</a>.</p>
        </div>
      </main>
    )
  }
}

export default HowToRent;
