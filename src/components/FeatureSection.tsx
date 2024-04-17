type CardProps = {
  title: string;
  description: string;
  imageUrl: string; // New property for image URL
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="relative w-full p-2 rounded-xl border border-gray-500 bg-gradient-to-r from-gray-500 to-gray-500 shadow-lg mb-4 md:p-3 md:mb-0 lg:h-72 xl:min-h-[480px] overflow-hidden">
    <img
      src={imageUrl}
      alt="Illustration"
      className="w-full h-80 object-cover rounded-xl"
    />{" "}
    {/* Image element */}
    <div className="flex flex-col justify-between h-full text-gray-200 py-6">
      <div>
        <p className="text-lg lg:text-xl font-bold mb-2">{title}</p>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  </div>
);
const FeatureSection: React.FC = () => (
  <div className="lg:py-8 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
    <div className="mx-auto max-w-screen-sm mt-12">
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-sm md:text-lg text-gray-500">
        BOOSTIO SHOWCASE
      </p>
      <p className="pb-12 text-base lg:text-4xl font-bold lg:pb-14 text-gray-200">
        How can we help you?
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Card
        title="Organize Your Data"
        description="Collect, organize, and manage your data in a decentralized digital profile, enabling you to control and leverage your information for personalized web experiences."
        imageUrl="https://pixelplex.io/wp-content/uploads/2022/07/blockchain-explained-components-platforms-use-cases-main-1600.jpg"
      />
      <Card
        title="Improve your LLM and AI"
        description="Enhance your interactions with large language models (LLMs) by leveraging your decentralized digital profile to personalize and improve the quality of AI-generated content."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/1*VZJtd1_pRCiMfqJCJaQO5w.jpeg"
      />
      <Card
        title="Trust and Authenticity"
        description="Choose the level of access that third parties have to your digital profile, ensuring trust and authenticity in personalized web experiences while maintaining control over your data."
        imageUrl="https://thumbs.dreamstime.com/b/d-illustration-safety-concept-closed-padlock-digital-background-d-illustration-safety-concept-closed-padlock-digital-163797758.jpg"
      />
      <Card
        title="Marketing Content"
        description="Create and deliver personalized marketing content to your audience, leveraging your decentralized digital profile to enhance engagement and drive conversions."
        imageUrl="https://as1.ftcdn.net/v2/jpg/04/59/52/76/1000_F_459527642_VlepBSjvj3R2wKiboUT9zXxQ4tseiwIt.jpg"
      />
      <Card
        title="Develeper Relations"
        description="Build powerful videos that advocate for your brand, leveraging your decentralized digital profile to personalize content and drive engagement with your audience."
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--re1FhokR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pezkjon0pewuipf74o5f.png"
      />
      <Card
        title="Documentation"
        description="Create and deliver personalized documentation to your audience, either for your employees or clients, to enhance engagement and drive conversions."
        imageUrl="https://cdn-blog.scalablepath.com/uploads/2020/10/technical-documentation-software-project.png"
      />
      <Card
        title="Learning and Education"
        description="Embark on a personalized learning journey tailored to your decentralized digital profile, accessing curated content and educational resources to fuel continuous growth."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/0*DwVcmqU5wXjxcH9I.png"
      />
      <Card
        title="Collaborative Creation and Curation"
        description="Join forces with the community to curate and share content aligned with your decentralized digital profile, fostering innovation and quality within the personalized web experience."
        imageUrl="https://uploads-ssl.webflow.com/5e0c29eceae07ed55982d194/63c4b448a45ec713f511b12c_web3-light.png"
      />
    </div>
  </div>
);

export default FeatureSection;
