import { defaultServiceTimes } from "@/lib/data/serviceTimes";

export const church = {
  name: "The Church of Abundant Life",
  shortName: "Abundant Life",
  tagline: "Lifting up the name of Jesus!",
  description:
    "Abundant Life World Outreach Center lifting up the name of Jesus and reaching out to people all over the world.",
  url: "https://www.abundantlifeharvey.org",
  address: {
    street: "2301 Par 3 Dr.",
    city: "Harvey",
    state: "LA",
    zip: "70058",
    full: "2301 Par 3 Dr., Harvey, LA 70058",
  },
  phone: "(504) 367-4000",
  phoneHref: "tel:+15043674000",
  fax: "(504) 367-6741",
  email: "wherejesusshines@yahoo.com",
  officeHours: "Monday – Thursday, 9:00 AM – 3:00 PM",
  mapsUrl:
    "https://www.google.com/maps/place/2301+Par+3+Dr,+Harvey,+LA+70058",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=2301+Par+3+Dr,+Harvey,+LA+70058&output=embed",
  social: {
    facebook: "https://www.facebook.com/thechurchofabundantlife",
    youtube: "https://www.youtube.com/user/abundantlifeharvey",
  },
  giving: {
    tithely: "https://tithe.ly/give_new/www/#/tithely/give",
    textNumber: "833-590-0603",
    textKeyword: "GIVE",
  },
  services: defaultServiceTimes.services,
  declarations: [
    "No weapon formed against you shall prosper",
    "By His stripes you are healed",
    "Declare a thing and it shall be established for you",
    "Jesus is Lord!",
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/give", label: "Give" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const pastors = [
  {
    name: "Jonas and Ruthie Robertson",
    title: "Senior Pastor",
    image: "/images/jonas.jpg",
    bio: [
      "Welcome to our Abundant Life World Outreach Center web site. I would like to cordially invite you to our Worship Services. Please join us as we praise the Lord and develop a closer relationship with Jesus.",
      "I am the founder and Senior Pastor of Abundant Life World Outreach Center. I was born in New Orleans and have been involved in Church ministry since 1974. Prior to founding the Church of Abundant Life, I was a staff evangelist at the Marvin Gorman Ministries. I attended International Bible College in San Antonio, Texas and graduated with a Bachelors Degree in Theology. Ruth and I have three children.",
    ],
  },
  {
    name: "Bill and Dianna Fitzgerald",
    title: "Associate Pastor",
    image: "/images/bill.jpg",
    bio: [
      "First, I would like to thank you for visiting our web site. Let me introduce myself. My name is Bill Fitzgerald. I'm the Associate Pastor of Abundant Life World Outreach Center. My wife's name is Dianna and we have four children.",
      "We have been a part of Abundant Life since 1991. We are very excited about what the Lord is doing in our church.",
      "We serve under a wonderful Pastor, Jonas Robertson. We consider ourselves to be very blessed to serve and work with the families of this church.",
      "Part of the vision that our Lord has given us, is to equip the saints (warriors for Jesus) for the ministry. Then we release them into the ministry, locally and abroad.",
      "My wife and I travel during the year, for the purpose of ministry in foreign lands and domestic churches. The Lord has given us a vision to reach out to the world and to our local community. We have a tremendous task ahead of us, especially here in Greater New Orleans.",
      "We want to invite you to join us at the Abundant Life World Outreach Center, whenever you or your family are in the area. Please plan a visit to our church to see what gifts the Word of God has for you.",
    ],
  },
] as const;
