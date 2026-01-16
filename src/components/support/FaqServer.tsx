import Header from "../header/Header";
import ContactForm from "./ContactForm";
import SupportClient from "./FaqClient";

const supportData = {
  faqs: [
    {
      question: "How do I register as a car owner on RentRide?",
      answer:
        "To register as a car owner, click 'Sign Up' on the homepage, select 'Car Owner' as your role, and provide your details including vehicle information. Verify your email and upload documents like your driver's license and car registration.",
    },
    {
      question: "How do I register as a customer on RentRide?",
      answer:
        "To register as a customer, click 'Sign Up', choose 'Customer' as your role, enter your personal information, and verify your email. You may need to upload identification for verification.",
    },
    {
      question: "How do I list my car for rent?",
      answer:
        "After registering as a car owner, go to your dashboard, click 'Add Vehicle', and fill in details like make, model, year, rental price, and availability. Upload photos and submit for approval.",
    },
    {
      question: "How do I rent a car on RentRide?",
      answer:
        "Browse available cars in your area, select a vehicle, check its availability, and book it by providing payment details. The owner will confirm, and you can pick up the car at the agreed location.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit cards, debit cards, and digital wallets like PayPal. All payments are processed securely through our platform.",
    },
    {
      question: "Is insurance included with rentals?",
      answer:
        "Basic insurance is included in all rentals. You can opt for additional coverage during booking. Car owners are also required to maintain their own insurance.",
    },
    {
      question: "What should I do if I face an issue during a rental?",
      answer:
        "Contact our support team immediately via the app or website. We offer 24/7 assistance for any emergencies or issues.",
    },
  ],
};

export const metadata = {
  title: "Support - RentRide",
  description: "Get help and support for your car rental needs at RentRide",
};

export default function Support() {
  return (
    <div className="min-h-screen  ">
      <Header />
      <div className=" mx-auto  sm:px-6 lg:px-8">
        <ContactForm />
        <SupportClient supportData={supportData} />
      </div>
    </div>
  );
}
