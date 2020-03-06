const data = [
    {
        bookId:1,
        title:"The Wizard of OZ", 
        authorName:"L. Frank Baum"
    },
    {
        bookId:2,
        title:"1984",
        authorName:"George Orwell"
    },
    {
        bookId:3,
        title:"Harry Potter",
        authorName:"J.K. Rowling"
    },
    {
        bookId:4,
        title:"The Great Gatsby",
        authorName:"F. Scott Fitzgerald"
    },
    {
        bookId:5,
        title:"The Things They Carried",
        authorName:"Tim O'Brien"
    },
    {
        bookId:6,
        title:"Pygmalion",
        authorName:"George Bernard Shaw"
    },
    {
        bookId:7,
        title:"The Odyssey",
        authorName:"Homer"
    },
    {
        bookId:8,
        title:"To Kill a Mockingbird",
        authorName:"Harper Lee"
    },
    {
        bookId:9,
        title:"Animal Farm",
        authorName:"George Orwell"
    },
    {
        bookId:10,
        title:"Pride and Prejudice",
        authorName:"Jane Austen"
    },
    {
        bookId:11,
        title:"The Catcher in the Rye",
        authorName:"J.D. Salinger"
    },
    {
        bookId:12,
        title:"Lord of the Flies",
        authorName:"William Golding"
    },
    {
        bookId:13,
        title:"Of Mice and Men",
        authorName:"John Steinbeck"
    },
    {
        bookId:14,
        title:"Night",
        authorName:"Elie Wiesel"
    },
    {
        bookId:15,
        title:"Hamlet",
        authorName:"William Shakespeare"
    },
    {
        bookId:16,
        title:"The Adventures of Huckleberry Finn",
        authorName:"Mark Twain"
    },
    {
        bookId:17,
        title:"Brave New World",
        authorName:"Aldous Huxley"
    },
    {
        bookId:18,
        title:"The Outsiders",
        authorName:"S.E. Hinton"
    },
    {
        bookId:19,
        title:"The Grapes of Wrath",
        authorName:"John Steinbeck"
    },
    {
        bookId:20,
        title:"A Tale of Two Cities",
        authorName:"Charles Dickens"
    },
    {
        bookId:21,
        title:"One Flew Over the Cuckoo's Nest",
        authorName:"Ken Kessey"
    },
    {
        bookId:22,
        title:"Flowers for Algernon",
        authorName:"Daniel Keyes"
    },
    {
        bookId:23,
        title:"The Old Man and the Sea",
        authorName:"Ernest Hemingway"
    },
    {
        bookId:24,
        title:"Macbeth",
        authorName:"William Shakespeare"
    },
    {
        bookId:25,
        title:"Uncle Tom's Cabin",
        authorName:"Harriet Beecher Stowe"
    }, 
    {
        bookId:26,
        title:"The Sun Also Rises",
        authorName:"Ernest Hemingway"
    }, 
    {
        bookId:27,
        title:"Charlette's Web",
        authorName:"E.B. White"
    }, 
    {
        bookId:28,
        title:"The Stand",
        authorName:"Stephen King"
    }, 
    {
        bookId:29,
        title:"The BFG",
        authorName:"Roald Dahl"
    }, 
    {
        bookId:30,
        title:"Where the Red Fern Grows",
        authorName:"Wilson Rawls"
    }
];
window.booksPerPage = 6;
window.curr = 1;
data.slice(0,booksPerPage).forEach((obj) => {
    document.getElementById("data").innerHTML += "<li class='list-group-item'>Id: " + obj.bookId + ", Title: " + obj.title + ", Author: " + obj.authorName + "</li>";
});
function changeData(index) {
    document.querySelectorAll("button")[window.curr].classList.remove("active");
    document.querySelectorAll("button")[index].classList.add("active");
    let showData = data.slice((index-1)*booksPerPage,index*booksPerPage);
    document.getElementById("data").innerHTML = "";
    showData.forEach((obj) => {
        document.getElementById("data").innerHTML += "<li class='list-group-item'>Id: " + obj.bookId + ", Title: " + obj.title + ", Author: " + obj.authorName + "</li>";
    });
    window.curr = index;
}

function next() {
    if (window.curr < 5) {
        changeData(window.curr+1);
    }
}

function prev() {
    if (window.curr > 1) {
        changeData(window.curr-1);
    }
}