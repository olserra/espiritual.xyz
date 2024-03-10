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
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-lg md:text-4xl font-bold text-gray-200">
        Web3 Marketplace Showcase
      </p>
      <p className="pb-12 text-base italic lg:text-lg lg:pb-14 text-gray-200">
        Where can you use our solution
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Card
        title="Own Your Data with Blockchain"
        description="Take control of your digital identity and data with blockchain technology, ensuring ownership and security while enabling personalized web experiences."
        imageUrl="https://www.ancrypto.io/wp-content/uploads/2023/04/ownership.jpg"
      />
      <Card
        title="Decentralized Profile Management"
        description="Harness the power of blockchain to manage your digital profile in a decentralized manner, ensuring privacy and control while receiving customized recommendations and experiences."
        imageUrl="https://learn.swyftx.com/wp-content/uploads/2021/11/What-is-DeFi-800x533.png"
      />
      <Card
        title="Trust and Authenticity in Personalization"
        description="Choose the level of access that third parties have to your digital profile, ensuring trust and authenticity in personalized web experiences while maintaining control over your data."
        imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*GoOGwG5xc-iZuP4ipL7lVw.png"
      />
      <Card
        title="Cross-Platform Personalization"
        description="Utilize your decentralized digital profile seamlessly across various platforms for tailored recommendations and personalized experiences, enhancing your online journey."
        imageUrl="https://cdn.pixabay.com/photo/2022/10/25/09/19/platform-7545309_1280.png"
      />
      <Card
        title="Community-Driven Profile Governance"
        description="Engage in community-driven governance of your digital profile, shaping its evolution and contributing to a collaborative ecosystem of personalized web experiences."
        imageUrl="https://assets-global.website-files.com/63031faba0f284f1d8ddbcc6/63eb4c94a5edc024b4e5292c_loyalty-community.png"
      />
      <Card
        title="Shopping and Marketplace Personalization"
        description="Better recommendations and personalized experiences while shopping online, leveraging your decentralized digital profile to enhance your journey and discover new products."
        imageUrl="https://www.antiersolutions.com/wp-content/uploads/2022/10/image_2022_10_03T11_23_00_335Z.png"
      />
      <Card
        title="Personalized Learning Pathways"
        description="Embark on a personalized learning journey tailored to your decentralized digital profile, accessing curated content and educational resources to fuel continuous growth."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/0*DwVcmqU5wXjxcH9I.png"
      />
      <Card
        title="Collaborative Content Curation"
        description="Join forces with the community to curate and share content aligned with your decentralized digital profile, fostering innovation and quality within the personalized web experience."
        imageUrl="https://uploads-ssl.webflow.com/5e0c29eceae07ed55982d194/63c4b448a45ec713f511b12c_web3-light.png"
      />
    </div>
  </div>
);

export default FeatureSection;
