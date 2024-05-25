const sampleListings = [
    {
        title: "The Future of Technology",
        description: "Exploring innovations shaping the future.",
        image: "https://images.unsplash.com/photo-1626222628055-fb92dd194160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
        price: 19999,
        location: "San Francisco",
        country: "USA"
      },
      {
        title: "Digital Marketing Essentials",
        description: "A comprehensive guide to online marketing.",
        image:"https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
        price: 10500,
        location: "London",
        country: "UK"
      },
      {
        title: "Gourmet Cooking",
        description: "Master the art of fine dining at home.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 25000,
        location: "Paris",
        country: "France"
      },
      {
        title: "Yoga for Beginners",
        description: "A step-by-step guide to start practicing yoga.",
        image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 3000,
        location: "Rishikesh",
        country: "India"
      },
      {
        title: "Investing in Stocks",
        description: "Strategies for successful stock market investments.",
        image:"https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 18000,
        location: "New York",
        country: "USA"
      },
      {
        title: "Learning Python",
        description: "An introduction to Python programming.",
        image:"https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 8000,
        location: "Bangalore",
        country: "India"
      },
      {
        title: "Graphic Design Basics",
        description: "Fundamentals of graphic design for beginners.",
        image:"https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 12000,
        location: "Berlin",
        country: "Germany"
      },
      {
        title: "Fitness and Health",
        description: "A holistic approach to achieving fitness goals.",
        image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 7000,
        location: "Sydney",
        country: "Australia"
      },
      {
        title: "Music Production",
        description: "Learn to produce your own music tracks.",
        image:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 15000,
        location: "Los Angeles",
        country: "USA"
      },
      {
        title: "Creative Writing",
        description: "Develop your writing skills with expert tips.",
        image:"https://images.unsplash.com/photo-1503594384566-461fe158e797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 9500,
        location: "Dublin",
        country: "Ireland"
      },
      {
        title: "Home Gardening",
        description: "Tips and tricks for a thriving home garden.",
        image:"https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 4000,
        location: "Cape Town",
        country: "South Africa"
      },
      {
        title: "Entrepreneurship",
        description: "Guide to starting and managing your own business.",
        image:"https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 22000,
        location: "Singapore",
        country: "Singapore"
      },
      {
        title: "Digital Photography",
        description: "Mastering the art of capturing stunning photos.",
        image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 11000,
        location: "Tokyo",
        country: "Japan"
      },
      {
        title: "Travel on a Budget",
        description: "How to explore the world without breaking the bank.",
        image:"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 5000,
        location: "Bangkok",
        country: "Thailand"
      },
      {
        title: "Blockchain Basics",
        description: "Understanding blockchain technology and its applications.",
        image:"https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGhvbWV8ZW58MHx8MHx8fDA%3D",
        price: 13000,
        location: "Zurich",
        country: "Switzerland"
      },
      {
        title: "Culinary Arts",
        description: "Professional techniques for aspiring chefs.",
        image:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxob21lfGVufDB8fDB8fHww",
        price: 26000,
        location: "Florence",
        country: "Italy"
      },
      {
        title: "Artificial Intelligence",
        description: "Introduction to AI and machine learning.",
        image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxob21lfGVufDB8fDB8fHww",
        price: 17500,
        location: "Toronto",
        country: "Canada"
      },
      {
        title: "Sustainable Living",
        description: "Adopt a sustainable lifestyle to save the planet.",
        image:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxob21lfGVufDB8fDB8fHww",
        price: 6000,
        location: "Copenhagen",
        country: "Japan",
      }      
];

module.exports = {data: sampleListings};