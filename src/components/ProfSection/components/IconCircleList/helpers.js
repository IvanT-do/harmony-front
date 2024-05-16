export const resolvePersonCircles = (person, icons) => {
    const actual = [];

    icons.forEach(icon => {
        switch (icon.type){
            case "case":
                actual.push({
                    ...icon,
                    tooltip: icon.tooltip + ":\n" + person.experience
                });
                break;
            case "award":
                if(person.awards){
                    actual.push({
                        ...icon,
                        tooltip: icon.tooltip + ":\n" + person.awards.replace(/, ?/g, "\n")
                    });
                }
                break;
            case "book":
                if(person.qualification_improvement){
                    actual.push({
                        ...icon,
                        tooltip: "Пройдены курсы повышения квалификации"
                    });
                }
                break;
            case "teach":
                actual.push({
                    ...icon,
                    tooltip: icon.tooltip + ":\n" + person.education
                });
                break;
        }
    })

    return actual;
}