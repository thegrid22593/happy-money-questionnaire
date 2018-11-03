var fixture = {
  name: '',
  currentAssesmentId: 0,
  showingResults: false,
  showHalfwayDisplay: false,
  showingStartScreen: false,
  showingQuestionScreen: false,
  assesmentScores: [
    {
      id: 1,
      icon: '/svg/grit.svg',
      name: 'Grit',
      score: 0,
    },
    {
      id: 2,
      icon: '/svg/optimism.svg',
      name: 'Optimism',
      score: 0,
    },
  ],
  assesments: [
    {
      id: 1,
      active: false,
      name: 'Grit',
      questions: [
        {
          id: 1,
          active: true,
          answered: false,
          text: 'I get super obsessed with new projects but tend to burn out fast.',
          reverse: true,
        },
        {
          id: 2,
          active: false,
          answered: false,
          text: 'I often abandon my current goal to chase a shiny new one.',
          reverse: true,
        },
        {
          id: 3,
          active: false,
          answered: false,
          text: 'I have a hard time staying committed to projects that may take months to complete',
          reverse: true,
        },
        {
          id: 4,
          active: false,
          answered: false,
          text: 'I always finish what I start. Period.',
          reverse: false,
        },
        {
          id: 5,
          active: false,
          answered: false,
          text: "I'd say I'm more dedicated to my goals than others seem to be to theirs.",
          reverse: false,
        },
      ],
      answers: [
        {
          id: 1,
          text: '1000 times nope',
          points: 1,
        },
        {
          id: 2,
          text: 'Not Really',
          points: 2,
        },
        {
          id: 3,
          text: 'Ummmm... No comment',
          points: 3,
        },
        {
          id: 4,
          text: 'Sort of',
          points: 4,
        },
        {
          id: 5,
          text: 'Totally',
          points: 5,
        },
      ],
    },
    {
      id: 2,
      active: false,
      name: 'Optimism',
      questions: [
        {
          id: 1,
          active: true,
          answered: false,
          text: 'Even in hard times, I usually expect things will work out.',
          reverse: false,
        },
        {
          id: 2,
          active: false,
          answered: false,
          text: 'Things always seem to go wrong for me.',
          reverse: true,
        },
        {
          id: 3,
          active: false,
          answered: false,
          text: 'I always feel like things will work out for future me',
          reverse: false,
        },
        {
          id: 4,
          active: false,
          answered: false,
          text: 'Good things happen to other people, not me.',
          reverse: true,
        },
        {
          id: 5,
          active: false,
          answered: false,
          text: "Generally, I'll probably experience more good than bad in my life.",
          reverse: false,
        },
      ],
      answers: [
        {
          id: 1,
          text: 'Not me at all',
          points: 1,
        },
        {
          id: 2,
          text: 'Not really me',
          points: 2,
        },
        {
          id: 3,
          text: 'Kind of me, but not really',
          points: 3,
        },
        {
          id: 4,
          text: 'Kind of me',
          points: 4,
        },
        {
          id: 5,
          text: 'For sure me',
          points: 5,
        },
      ],
    },
  ],
};

export default fixture;
