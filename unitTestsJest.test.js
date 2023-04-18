const desafio = require("./desafio.js");

describe("doubleANumber", () => {
  const array = Array.from({ length: numberOfTests }, () => {
    const randomNumber = Math.random();
    return [randomNumber, 2 * randomNumber];
  });

  it.each(array)(
    "should return the double of a value.",
    (input, expectedResult) => {
      expect(desafio.doubleANumber(input)).toBe(expectedResult);
    }
  );
});

describe("createFullName", () => {
  const configuration = {
    dictionaries: [ung.names],
    style: "capital",
  };

  const array = Array.from({ length: numberOfTests }, () => {
    const firstName = ung.uniqueNamesGenerator(configuration);
    const lastName = ung.uniqueNamesGenerator(configuration);

    return [firstName, lastName, `${firstName} ${lastName}`];
  });

  it.each(array)(
    "should return a concatenation of the strings",
    (firstName, lastName, expectedResult) => {
      expect(desafio.createFullName(firstName, lastName)).toEqual(
        expectedResult
      );
    }
  );
});

describe("calculateTheLengthOfAString", () => {
  const configuration = {
    dictionaries: [ung.colors, ung.adjectives, ung.animals],
  };

  const array = Array.from({ length: numberOfTests }, () => {
    const generatedString = ung.uniqueNamesGenerator(configuration);
    return [generatedString, generatedString.length];
  });

  it.each(array)(
    "should return the length of the string",
    (argument, expectedResult) => {
      expect(desafio.calculateTheLenghtOfAString(argument)).toBe(
        expectedResult
      );
    }
  );
});

describe("addNewLanguage", () => {
  const configuration = {
    dictionaries: [ung.animals],
  };

  const object = desafio.programming;

  const languages = [...desafio.programming.languages];

  const name = ung.uniqueNamesGenerator(configuration);

  const result = desafio.addNewLanguage(object, name);

  it("adds a new language to the object's language array", () => {
    expect(result).toMatchObject({
      languages: [...languages, name],
    });
  });

  it("increases array's size", () => {
    expect(result.languages.length).toBe(languages.length + 1);
  });
});

describe("numbersArrayIntoString", () => {
  const array = Array.from({ length: 4 }, () => {
    const numberArray = Array.from(
      { length: Math.round(Math.random() * 9) },
      () => Math.round(Math.random() * 9)
    );

    const string = numberArray
      .reduce((acc, el) => acc.concat(el), "")
      .replace(/(\d{3})(?=\d)/g, "$1.");

    return [numberArray, string];
  });

  it.each(array)(
    "should merge array elements to string",
    (array, expectedResult) => {
      expect(desafio.numbersArrayIntoString(array)).toBe(expectedResult);
    }
  );
});

describe("votersResult", () => {
  it("should return a similar object", () => {
    expect(desafio.votersResult(desafio.voters)).toMatchObject({
      numYoungVotes: 1, 
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    });
  });
});
