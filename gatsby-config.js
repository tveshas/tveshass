module.exports = {
  pathPrefix: "/tveshass",
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://tveshas.github.io/tveshass/`,
    // Your Name
    name: "Tvesha Singh",
    // Main Site Title
    title: `Tvesha | Computer Scientist`,
    // Description that goes under your name in main bio
    description: `Computer Science undergraduate with a strong passion for Machine Learning and Physics. If you need an engineer who can quickly prototype concepts and scale them up, I could be the person you’re looking for.`,
    // Optional: Twitter account handle
    author: `https://medium.com/@tveshasingh25`,
    // Optional: email address
    email: `tveshasingh25@gmail.com`,
    // Optional: Github account URL
    github: `https://github.com/tveshas`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/tvesha-singh/`,
    // Optional: link to resume
    resume: ``,
    // Content of the About Me section
    about: `Hey there, I am Tvesha, a second-year Computer Science student at Indira Gandhi Delhi Technical University for Women. Alongside this, I am also pursuing Data Science at the Indian Institute of Technology, Madras. 
Ever since I took Applied Physics, it lit a deep fascination with quantum mechanics, which naturally led me to explore the world of machine learning.
At university, I dedicate much of my time to machine learning and its adjacent fields—such as computer vision, natural language processing, and distributed systems—all of which I find pretty neat.
I write tech blogs about pretty cool things and insights I gathered while learning. Check my Medium out.
I am also deeply passionate about advocating for women empowerment and financial independence. It is something I believe is utterly essential in this time. We need more women in tech contributing to innovation. If you are interested in learning more about my thoughts on this topic, you can check out my blog where I dive deeper into these issues (:

Outside of computer science, I love making cinematic films, enjoy playing tennis, and cheering for Ferrari in Formula 1. Lately, My mind has been drawn to the wisdom of ages - exploring the depths of the Bhagavad Gita's teachings alongside Socrates' timeless insights. There's something deeply moving about seeing how these ancient perspectives still speak to our modern questions about life and truth. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Pink Neurons (Won Hackathon)",
        description: `An interactive visual learning platform that leverages Manim (Mathematical Animation Engine) to create engaging visualizations of complex CS and mathematical concepts in less than 240 seconds. `,
        link: "https://github.com/tveshas/pink_neurons",
      },
      {
        name: "AI Poly Agent (Won Hackathon)",
        description: `Award-winning Flask application integrating Perplexity AI to analyze cryptocurrency market opportunities on Polymarket, featuring regex-based URL parsing, SpacyTokenizer for market search, and interactive data visualization with comprehensive confidence ratings and cited source explanations.`,
        link: "https://github.com/kumar-shridhar/AI-Poly-Agent/tree/main",
      },
      {
        name: "Spotify Analyser",
        description: `AI gives it's two cents on your Spotify profile. It analyses your listening habits and you get witty, and culturally relevant insights into your musical preferences.`,
        link: "https://github.com/tveshas/spotify-roast/tree/main",
      },
      {
        name: "Handwritten MNIST digits generator (Based on the original GAN paper by Goodfellow et al)",
        description: `PyTorch-based Generative Adversarial Network (GAN) that generates handwritten digit images using the MNIST dataset, implementing a sophisticated generator and discriminator architecture with custom loss functions. `,
        link: "https://github.com/tveshas/mnist-gan",
      },
      {
        name: "Verstappen's Race predictor",
        description: `Neural network model predicts Formula 1 driver Verstappen's race outcome based on various pre-race and qualifying performance metrics.`,
        link:
          "https://github.com/tveshas/dududu33/tree/main",
      },
      {
        name: "Celestial Mechanics Stimulator",
        description: `Developed a physics-based planetary system model that demonstrates advanced computational visualization techniques in astronomical simulation. `,
        link:
          "https://github.com/tveshas/planet-stimulation",
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: "Mentorship under Distinguished Engineer of IBM, India",
        description: "I worked on implementing a service mesh architecture using HashiCorp Consul to enhance the resilience of microservices. This included configuring service discovery, real-time health monitoring, secure communication, and traffic management to prevent cascading failures. By enabling features like automatic failover, circuit breaking, and cross-datacenter replication, I demonstrated how such an architecture could mitigate large-scale outages, such as those experienced by platforms like Paytm.",
        link: "",
      },
      {
        name: "TryCrypto",
        description: "Gained practical, real-world experience in blockchain technologies and decentralized application architectures through daily interactions with developers and users. Worked as a Technical Discord Manager to manage 5000+ users for a fintech startup, fostering a builder community.",
        link: "",
      },
      {
        name: "AWS Cloud Club, IGDTUW",
        description: "Contributed to the club by designing engaging articles and actively participating in AWS sessions conducted by industry experts, enhancing my knowledge of cloud technologies. I was exposed to a real-time analytics dashboard using EC2, S3, and Lambda, which reduced query response times by 30% for 200+ active users.",
        link: "",
      },
      {
        name: "Edterra: Community Service Volunteer",
        description: "Volunteered in Bhutan to support farmers, gaining insights into their way of life while enhancing leadership, teamwork, and problem-solving skills. The experience was profound, showcasing how Bhutan thrives as the happiest country despite minimal resources.",
        link: "https://edterra.com/why-students-must-volunteer-for-community-service-in-bhutan/",
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: "Languages",
        description:
          "Python, C/C++, Java, JavaScript, HTML/CSS, SQL",
      },
      /*{
        name: "Engineering Frameworks/Tools/Libraries",
        description:
          "Express • FastAPI • React • Docker • Redis • AWS (EC2, Sagemaker, SQS, SNS, DynamoDB) • Postgres",
      },*/
      {
        name: "Machine Learning Frameworks/Tools/Libraries",
        description:
          "PyTorch • Tensorflow/Keras • Scikit-Learn • CUDA • Pandas",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
