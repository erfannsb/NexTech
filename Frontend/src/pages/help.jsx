import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const faqs = [
    {
      question: "What types of computer hardware do you sell?",
      answer:
        "We offer a wide range of hardware, including CPUs, graphic cards (GPUs), motherboards, RAM, storage devices (SSD & HDD), power supplies, cooling systems, PC cases, monitors, and accessories.",
    },
    {
      question: "Are your products brand new and original?",
      answer:
        "Yes, all our products are 100% brand new, original, and sourced directly from authorized distributors or manufacturers.",
    },
    {
      question: "How can I check if a product is in stock?",
      answer:
        "Product availability is updated in real-time. If the product is marked as “In Stock,” it’s available for purchase. “Out of Stock” items cannot be added to the cart.",
    },
    {
      question: "Do you offer custom-built PCs?",
      answer:
        "Yes! We offer custom PC builds. You can select components individually or contact us for professional consultation and assembly services.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and bank transfers. All payments are secured with end-to-end encryption.",
    },
    {
      question: "Can I cancel or modify my order after placing it?",
      answer:
        "Orders can be canceled or modified only before they are shipped. Please contact our support team as soon as possible.",
    },
    {
      question: "Will I receive an invoice for my order?",
      answer:
        "Yes, an invoice will be emailed to you after your purchase and can also be downloaded from your account dashboard.",
    },
    {
      question: "Where do you ship to?",
      answer:
        "We ship nationwide. International shipping rates and times may vary depending on your location.",
    },
    {
      question: "How long will it take for my order to arrive?",
      answer:
        "Orders are typically processed within 1-2 business days. Delivery usually takes 2–7 business days depending on your location and shipping method.",
    },
    {
      question: "Can I track my shipment?",
      answer:
        "Yes, once your order is shipped, you will receive a tracking number via email or SMS.",
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes, all products come with a manufacturer’s warranty, usually ranging from 1 to 3 years. Please check the product page for exact warranty details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return unused items within 14 days of delivery for a full refund or exchange. Items must be in original condition with all packaging intact.",
    },
    {
      question: "How do I request a return or replacement?",
      answer:
        "Simply go to your account dashboard, select the order, and click on “Request Return.” Or contact our support team for assistance.",
    },
    {
      question: "I need help choosing components. Can you assist me?",
      answer:
        "Absolutely! Our experts can help you choose compatible components based on your needs and budget. Reach out via live chat or our contact page.",
    },
    {
      question: "Do you provide technical support after purchase?",
      answer:
        "Yes, we offer free basic support for purchased components and builds. Advanced support services may incur a fee.",
    },
    {
      question: "Do I need an account to place an order?",
      answer:
        "You can check out as a guest, but we recommend creating an account to track your orders, receive updates, and access exclusive offers.",
    },
    {
      question: "Do you offer discounts for bulk orders or businesses?",
      answer:
        "Yes, we offer special pricing for bulk purchases and B2B customers. Contact us for a custom quote.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach us via Live Chat (Mon–Fri, 9am–6pm), email: support@[yourdomain].com, or phone: [+Your Phone Number].",
    },
    {
      question: "What should I do if I received a damaged or wrong item?",
      answer:
        "Please contact us immediately with photos of the item and packaging. We’ll arrange a replacement or refund as quickly as possible.",
    },
  ];

  return (
    <div className="flex flex-col items-center mb-10">
      {/* Header */}
      <h2 className="mt-[100px] font-black text-2xl">
        Frequently Asked Questions
      </h2>
      <p className="text-[#999999]">
        These are the most commonly asked questions about Our Online Shop
      </p>
      <p className="text-[#999999]">
        Can't Find What You're looking for?
        <button className="text-blue-500 underline ml-2 cursor-pointer hover:text-blue-600">
          chat with our friendly team
        </button>{" "}
      </p>

      {/* Questions */}
      <div className="mt-7 w-[50%] whitespace-break-spaces flex flex-col ">
        {faqs.map((e) => (
          <Question q={e.question} a={e.answer} />
        ))}
      </div>
    </div>
  );
}

function Question({ q, a }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="bg-amber-50 w-3 h-3 rounded-full mr-3"></div>
          <h3 className="font-bold text-lg text-zinc-100">{q}</h3>
        </div>

        <button
          className="cursor-pointer hover:text-zinc-400"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <h3
        className={`text-[#8C8C8C] text-md ml-6 mt-2 mb-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {a}
      </h3>
    </div>
  );
}
