import React from 'react';

class HowToList extends React.Component {
  render() {
    return (
      <main className="center col-12">
        <div className="col-r-8-12 col-xl-r-10-12 col-full-hd-r-10-12 col-m-fw center t-l faq-cke faq-cke-indentation">
          <div className="faq-cke__title t-xl title-d-1 b-s">
            How to list your car
          </div>
          <p>Renting out your vehicle is easy &mdash; and rewarding. Just follow these simple steps:</p>

          <ol>
            <li>Click &ldquo;List a car&rdquo; from either the home page or within the ExtraVagant app. (You must be
              registered on ExtraVagant before you can list a car.)
            </li>
            <li>Enter the basic stats about your car as well as a detailed but concise description.&nbsp;</li>
            <li>Upload at least three well-lit photos. Need some help? Check out our photo tips.&nbsp;&nbsp;</li>
            <li>Set your policies: specify rules for fuel type, mileage limits and so on.</li>
            <li>Choose which rental types you&rsquo;ll offer and set the price for each:
              <ul>
                <li>Driving Rental: Renter drives the car</li>
                <li>Event Rental: Car is used for display only</li>
                <li>Chauffeured Rental: Owner or hired chauffeur drives the car</li>
              </ul>
            </li>
            <li>Set the location where renters can pick up your car and whether you provide delivery. You can also set
              delivery fees based on distance or airport pick up.&nbsp;</li>
            <li>Click &ldquo;Preview listing&rdquo; to make sure everything looks good, and then
              click &ldquo;Done.&rdquo;</li>
            <li>Once the car listing is live, you can also change the availability using the calendar, found under
              the &ldquo;Pricing &amp; Availability&rdquo; tab.
            </li>
          </ol>

          <p>Questions along the way? We&rsquo;re here to help. Contact <a
            href="mailto:support@ExtraVagant.com">support@ExtraVagant.com</a>.&nbsp;</p>
        </div>
      </main>
    )
  }
}

export default HowToList;
