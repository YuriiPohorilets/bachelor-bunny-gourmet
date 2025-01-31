export interface IFaqInteractor {
  content: {
    title: string;
  };

  faq: { title: string; content: string }[];
}

export const useFaqInteractor = (): IFaqInteractor => {
  return {
    content: { title: 'FAQ' },
    faq: [
      {
        title: 'How do I get srarted?',
        content:
          'Simple! Just give us a call or an email sharing your interest in placing an order. Send the form/questions back to us and we will be in touch within 12-24 hours.',
      },
      {
        title: 'Can i make special meal requests?',
        content:
          'Yes! The reason we have each client fill out a profile form, is to learn your likes and dislikes. Once the form is completed, we will customize a menu based specifically off your meal preferences',
      },
      {
        title: 'Do I have to purchase all four meals?',
        content:
          "You don't hae to purchase all four meals. Each meal can be ordered individually, however the price will be slightly more. Buy the bundle and save!",
      },
      {
        title: 'What if I need to cancel my order?',
        content:
          'If you are unable to accept delivery for the entire week, you must notify us within 12 hours prior to your scheduled delivery. If we have prior notice, you will not be charged for that week. If we are not notified, you will be charged a cancellation fee of $32.',
      },
      {
        title: 'What if I am running late or miss a delivery?',
        content:
          'At the time of delivery, we always factor in a dual grace period to allow for unexpected delays. If you are running more than 15 minutes behind, a one time late fee of $5 will be added to your next order. If you will be more than 15 minutes late, your driver may have to circle back to you or you will be rescheduled for another day. Please note that if you are running behind, it will throw off the remaining schedule to our other clients. Please be conscious of others.',
      },
      {
        title: 'What if I find an issue with my meal?',
        content:
          'If you find an issue with your meal, contact us immediately. The reason we request that each client fill out a profile form is so that we can customize your meal to your liking. If for some reason you are unhappy with a meal, let us know so that we can rectify the situation asap.',
      },
      {
        title: 'Can I get meals delivered on “off days”?',
        content:
          'Our meal plans are structured to be as convenient as possible. We do accommodate alternate delivery days. Please contact us to select the schedule that works best for you.',
      },
      {
        title: 'Can you cater an event or a pop-up at my business location?',
        content:
          "No matter if it's a quaint dinner for two, a bachelor party, or a wedding for 150 guests, we've got you covered. We also offer the opportunity to purchase our same delicious meals through our “pop-up” service at various locations. Hair/Barber shops, medical offices, police/fire stations and more!",
      },
    ],
  };
};
