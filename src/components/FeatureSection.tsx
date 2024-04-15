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
        How we work
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Card
        title="Content Generation"
        description="Elevate your brand's presence on LinkedIn with tailored content that engages and converts. From articles to posts, we ensure your voice is heard."
        imageUrl="https://assets-global.website-files.com/615c872453a0b757e4c18960/6435ae1ea1f8235b1c2d4778_business-team-brainstorming-marketing-plan%20(1).jpg"
      />
      <Card
        title="Lead Generation"
        description="Maximize your B2B lead potential through targeted LinkedIn campaigns that capture and funnel quality leads directly to your sales team."
        imageUrl="https://impactable.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-07-19.19.00-A-split-screen-image-showcasing-two-distinct-LinkedIn-ad-formats.-On-the-left-a-visually-appealing-Sponsored-Content-post-with-an-engaging-headline-.png"
      />
      <Card
        title="Profile Optimization"
        description="Enhance your LinkedIn profile to stand out in your industry. Our experts optimize your profile to attract the right connections and opportunities."
        imageUrl="https://assets-global.website-files.com/5e1a1f23a7d3a23af02faa4e/5ec0233f88601401692e81fb_02_Linkedin_Profile_SEO.jpg"
      />
      <Card
        title="Analytics and Reporting"
        description="Gain insightful analytics that help you understand the impact of your LinkedIn activities. Our detailed reports guide your ongoing strategy."
        imageUrl="https://images.ctfassets.net/dfcvkz6j859j/6gv6w2SW5kzLhoPaSIjd8b/82d8569e941aac7060355f82d6adbc4c/linkedin-dashboard-1647529353.webp"
      />
      <Card
        title="Strategy Consultation"
        description="Receive expert advice tailored to your business goals. We help you develop a robust LinkedIn strategy that aligns with your overall marketing objectives."
        imageUrl="https://www.socialmediaexaminer.com/wp-content/uploads/2022/01/linkedin-content-strategy-7-steps-how-to-1200.png"
      />
      <Card
        title="Training and Workshops"
        description="Empower your team with the skills to leverage LinkedIn effectively. Our workshops cover everything from basic navigation to advanced marketing techniques."
        imageUrl="https://i0.wp.com/businesstrainingworks.com/wp-content/uploads/138-Management-Training-Program.jpg"
      />
      <Card
        title="Campaign Management"
        description="Let us handle your LinkedIn campaigns from start to finish, including planning, execution, and optimization for best results."
        imageUrl="https://www.rightoninteractive.com/wp-content/uploads/2015/10/Campaign-Management1.jpg"
      />
      <Card
        title="Networking Solutions"
        description="Expand your professional network strategically. We connect you with the right individuals and groups to foster relationships that benefit your business."
        imageUrl="https://www.ensureservices.com/blog/wp-content/uploads/2020/07/shutterstock_1006041130-1200x710.jpg"
      />
    </div>
  </div>
);

export default FeatureSection;
