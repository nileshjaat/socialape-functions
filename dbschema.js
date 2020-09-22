let db = {
  users: [
    {
      userId: "fjhdsfjdshjfhdsjfhsjd",
      email: "user@email.com",
      handle: "user",
      createdAt: "2020-08-22T08:27:06.799Z",
      imageUrl: "image/sdjhcbdsjcbjhds",
      bio: "hello my name is user, nice to meet you",
      website: "https://user.com",
      location: "London, UK",
    },
  ],

  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2020-08-22T08:27:06.799Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],

  comments: [
    {
      userHandle: "user",
      screamId: "ddssdhcshchsuhkaujdkas",
      body: "this is the scream body",
      createdAt: "2020-08-22T08:27:06.799Z",
    },
  ],

  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "dfewfewfefewfewfewfewfdf",
      type: "like | comment",
      createdAt: "2020-08-22T08:27:06.799Z",
    },
  ],
};

const userDetails = {
  //Redux data
  credentials: {
    userId: "fjhdsfjdshjfhdsjfhsjd",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-08-22T08:27:06.799Z",
    imageUrl: "image/sdjhcbdsjcbjhds",
    bio: "hello my name is user, nice to meet you",
    website: "https://user.com",
    location: "London, UK",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "ddssdhcshchsuhkaujdkas",
    },
    {
      userHandle: "user",
      screamId: "sssawsaxascascascasdds",
    },
  ],
};
