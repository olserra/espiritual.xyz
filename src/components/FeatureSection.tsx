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
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-2xl md:text-4xl font-bold text-gray-200">
        Web3 Marketplace Showcase
      </p>
      <p className="pb-12 text-base lg:text-lg lg:pb-14 text-gray-200">
        Where can you use our solution
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Card
        title="Token Rewards for Engagement"
        description="Users earn tokens for actively participating, sharing data, and engaging with the platform. These tokens can be used for accessing premium features or voting on platform developments."
        imageUrl={
          "https://powerdao.ai/wp-content/uploads/2023/02/Group-590-2-min.png"
        }
      />
      <Card
        title="Decentralized Profiles"
        description="Leverage blockchain to create secure, decentralized profiles that users control, ensuring privacy and data integrity while enabling personalized AI experiences."
        imageUrl="https://learn.swyftx.com/wp-content/uploads/2021/11/What-is-DeFi-800x533.png"
      />
      <Card
        title="Enhanced Privacy and Security"
        description="Blockchain technology ensures user data is stored securely, providing a foundation for trust and privacy in every interaction."
        imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*GoOGwG5xc-iZuP4ipL7lVw.png"
      />
      <Card
        title="Cross-Platform Utility Tokens"
        description="Earned tokens can be used across different platforms and services, enhancing the utility and value of participation within the ecosystem."
        imageUrl="https://cdn.pixabay.com/photo/2022/10/25/09/19/platform-7545309_1280.png"
      />
      <Card
        title="Community Governance"
        description="Token holders can vote on platform updates, feature additions, and community-driven projects, fostering a collaborative ecosystem."
        imageUrl="https://assets-global.website-files.com/63031faba0f284f1d8ddbcc6/63eb4c94a5edc024b4e5292c_loyalty-community.png"
      />
      <Card
        title="Marketplace for Digital Goods and Services"
        description="A blockchain-based marketplace where users can trade tokens for digital goods, services, or exclusive content, enhancing the platform's value proposition."
        imageUrl="https://www.antiersolutions.com/wp-content/uploads/2022/10/image_2022_10_03T11_23_00_335Z.png"
      />
      <Card
        title="Personalized Learning and Development"
        description="Tokens can be used to access specialized courses, premium content, or personalized learning paths, encouraging continuous growth and development."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/0*DwVcmqU5wXjxcH9I.png"
      />
      <Card
        title="Collaborative Content Creation"
        description="Encourage collaborative content creation and sharing within the community, rewarding contributions with tokens to incentivize quality and innovation."
        imageUrl="https://uploads-ssl.webflow.com/5e0c29eceae07ed55982d194/63c4b448a45ec713f511b12c_web3-light.png"
      />
    </div>
  </div>
);

export default FeatureSection;
