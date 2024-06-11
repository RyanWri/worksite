<script>
  import Card from "$lib/components/Card.svelte";
  import { onMount } from "svelte";

  const cards = [
    {
      image: "/images/se_card.jpg",
      title: "Expertise in Software Development",
      description:
        "With extensive experience in software development, I specialize in creating robust, efficient, and scalable applications. I can assist your company in building cutting-edge software solutions that meet your business needs.",
    },
    {
      image: "/images/de_card.jpg",
      title: "Proficient in Data Engineering",
      description:
        "Skilled in data engineering, I excel at constructing data pipelines, performing ETL processes, and managing data warehouses. I can help your company harness the power of data for insightful decision-making.",
    },
    {
      image: "/images/mlops_card.png",
      title: "Mastery in Machine Learning Operations (MLOps)",
      description:
        "With a strong background in MLOps, I can streamline the deployment and monitoring of your machine learning models, ensuring they are scalable, maintainable, and delivering consistent performance.",
    },
    {
      image: "/images/ai_card.webp",
      title: "Innovator in Artificial Intelligence",
      description:
        "I bring expertise in AI, including natural language processing and computer vision, to help your company implement advanced AI solutions that drive innovation and transform your business processes.",
    },
    {
      image: "/images/fullstack_card.jpg",
      title: "Full-Stack Development Specialist",
      description:
        "As a full-stack developer, I am adept at creating seamless applications from front-end interfaces to back-end servers and databases. I can build comprehensive solutions that enhance user experience and operational efficiency.",
    },
    {
      image: "/images/cloud_arch_card.webp",
      title: "Expert in Cloud Architecture",
      description:
        "I specialize in designing and implementing robust cloud architectures. I can optimize your company's cloud infrastructure for performance, scalability, and cost-efficiency, ensuring a reliable and secure cloud environment.",
    },
  ];

  let aboutMeText =
    "I am a top-tier software engineer renowned for my versatility and expertise across various domains. With a multi-methods orientation, I excel in various domains.\nI leverage my comprehensive knowledge and experience to deliver innovative, scalable, and efficient solutions that drive business success.\n A bit of what we can offer you:";
  let words = [];
  let currentWordIndex = 0;
  let cardsToShow = 0;

  onMount(() => {
    words = aboutMeText.split(" ");
    const aboutMeInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        currentWordIndex++;
      } else {
        clearInterval(aboutMeInterval);

        // Start showing the cards one by one after the about me section is done
        const cardsInterval = setInterval(() => {
          if (cardsToShow < cards.length) {
            cardsToShow++;
          } else {
            clearInterval(cardsInterval);
          }
        }, 1000);
      }
    }, 5000 / words.length);
  });
</script>

<div class="container mx-auto p-4">
  <!-- About Me Section -->
  <div class="about-me">
    {#each words.slice(0, currentWordIndex) as word}
      <span class="text-2xl">{word} </span>
    {/each}
  </div>

  <!-- Cards Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each cards.slice(0, cardsToShow) as card}
      <Card
        image={card.image}
        title={card.title}
        description={card.description}
      />
    {/each}
  </div>
</div>

<style>
  .about-me {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
</style>
