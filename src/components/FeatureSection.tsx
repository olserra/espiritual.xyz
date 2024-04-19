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
        description="Collect, organize, and manage your data in a secure and strategic manner, leveraging it to personalize your content and reach your objectives."
        imageUrl="https://pixelplex.io/wp-content/uploads/2022/07/blockchain-explained-components-platforms-use-cases-main-1600.jpg"
      />
      <Card
        title="Improve your LLM and AI"
        description="Enhance your interactions with large language models (LLMs) by leveraging your data to personalize and improve the quality of your content and analysis."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/1*VZJtd1_pRCiMfqJCJaQO5w.jpeg"
      />
      <Card
        title="Sentiment Analysis"
        description="Analyze and understand the sentiment of your audience, leveraging your data to personalize your content and reach your objectives."
        imageUrl="https://terragongroup.com/wp-content/uploads/2023/10/email-customer-rev.jpg"
      />
      <Card
        title="AI Agents"
        description="Create and deploy AI agents to automate tasks and provide personalized content and insights to your audience, such as moderating comments and analyzing data."
        imageUrl="https://as1.ftcdn.net/v2/jpg/04/59/52/76/1000_F_459527642_VlepBSjvj3R2wKiboUT9zXxQ4tseiwIt.jpg"
      />
      <Card
        title="Content Generation"
        description="Build powerful and engaging content that resonates with your audience, such as videos, articles, and social media posts, leveraging your data to personalize and improve the quality of your content."
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--re1FhokR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pezkjon0pewuipf74o5f.png"
      />
      <Card
        title="Documentation"
        description="Create and deliver personalized documentation to your audience, either for your employees or external clients, to enhance engagement and drive conversions."
        imageUrl="https://cdn-blog.scalablepath.com/uploads/2020/10/technical-documentation-software-project.png"
      />
      <Card
        title="Learning and Education"
        description="Embark on a personalized learning journey tailored to your needs and objectives, leveraging your data to train your workforce and enhance their skills and knowledge."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/0*DwVcmqU5wXjxcH9I.png"
      />
      <Card
        title="On Demand Services"
        description="Access on-demand services to help you with your content creation and analysis, such as video editing, data visualization, and social media management."
        imageUrl="https://uploads-ssl.webflow.com/5e0c29eceae07ed55982d194/63c4b448a45ec713f511b12c_web3-light.png"
      />
    </div>
  </div>
);

export default FeatureSection;
