var defaultThreads = [
    {
        id: 1,
        title: "Thread1: Does someone answer to this problem? Please Help ",
        author: "Aaron",
        date: Date.now(),
        content: "Hey guys!! Aaron here. Please Help me solve problem: \n What is cos(x)+sin(x) in function of cos(x)?",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2: Volume of the sphere",
        author: "Aaron",
        date: Date.now(),
        content: "Hey Guys!! Aaron here.  Please help me solve this problem: \n Find the volume of the solid enclosed by the surfaces x^2+y^2+z^2=a^2, x^2+y^2+z^2=b^2, (a<b) and z=√x^2+y^2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

var defaultIds = [
    {
        id: 1,
        email: "ab669522@gmail.com",
        name: "ashwani",
        password: "test@123",
        status: "signedin",
    },
    {
        id: 2,
        email: "ab669522@gmail.com",
        name: "ashwani",
        password: "test@123",
        status: "signedin",
    }
]

var ids = defaultIds
if (localStorage && localStorage.getItem('ids')) {
    ids = JSON.parse(localStorage.getItem('ids'));
} else {
    ids = defaultIds;
    localStorage.setItem('ids', JSON.stringify(defaultIds));
}


