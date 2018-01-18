const tree = {
    name : "home",
    files : ["notes.txt","todo.txt"],
    subFolders: [
        { name : "payroll",
            files : ["paper.pdf","funds.csv"],
            subFolders: []
        },
        { name: "misc",
            files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
            subFolders: [
                { name : "logs",
                    files : ["logs1","logs2","logs3","logs4"],
                    subFolders: []
                }]
        }]
};
find = element => tree =>
    {
        if (tree.files.indexOf(element) != -1) {
            return true;
        }
        else if (tree.subFolders.length != 0){
            const otherFolders = tree.subFolders.map(find(element));
            return otherFolders.reduce((a,b) => a || b, false);
        } else {
            return false;
        }
    };
console.log(find("paper.pdf")(tree));
console.log(find("randomfile")(tree));