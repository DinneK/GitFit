import { expect } from "chai";

const newUser = new User({
  name: "Henrique Ferreira",
  address: "2918 Avenida Brigadeiro Faria Lima, Sao Paulo, Brazil, 05426-200",
  email: "henriqueferreira.fox@gmail.com",
  strideLength: 4.1,
  dailyStepGoal: 3000,
  friends: [2, 4, 8, 16, 32],
});

describe("creates a new user", () => {
  it("should be a new user", () => {
    expect(newUser).to.equal({
      id: 51,
      name: "Henrique Ferreira",
      address:
        "2918 Avenida Brigadeiro Faria Lima, Sao Paulo, Brazil, 05426-200",
      email: "henriqueferreira.fox@gmail.com",
      strideLength: 4.1,
      dailyStepGoal: 3000,
      friends: [2, 4, 8, 16, 32],
    });
  });
});
