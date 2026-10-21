export interface SolutionCardData {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: 'brain-circuit' | 'code-2' | 'wrench';
}

export const solutionsData = {
  eyebrow: 'Solutions',
  title: 'What are you trying to solve?',
  intro: 'Different challenges need different solutions. Start with yours.',
  cta: {
    label: 'Tell Us About Your Challenge',
    href: '#contact',
  },
  cards: [
    {
      id: 'make-website-smarter',
      title: 'Make My Website Smarter',
      description:
        'Help your customers find answers, automate repetitive tasks, and create smarter digital experiences with AI.',
      capabilities: [
        'FoxDesk AI chatbot',
        'AI assistants',
        'Workflow automation',
      ],
      icon: 'brain-circuit',
    },
    {
      id: 'build-something-new',
      title: 'Build Something New',
      description:
        'Turn your idea into a polished digital product, built around your goals and your customers’ needs.',
      capabilities: [
        'Website development',
        'Custom software development',
        'Mobile application development',
      ],
      icon: 'code-2',
    },
    {
      id: 'improve-what-i-have',
      title: 'Improve What I Already Have',
      description:
        'Enhance existing digital products with new features, integrations, performance improvements, and ongoing technical support.',
      capabilities: [
        'Existing website and software improvements',
        'API and third-party integrations',
        'Maintenance and ongoing support',
      ],
      icon: 'wrench',
    },
  ] satisfies SolutionCardData[],
};
