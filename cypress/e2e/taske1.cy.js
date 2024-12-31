///< reference type ="cypress"/>
describe('taske1',()=>{
it('test all elements in regester page',() =>{
cy.visit("https://demo.productionready.io/#/register")
cy.contains("Sign up").last().click();
cy.contains("Home");
cy.contains("Sign up").first().click();
cy.contains("conduit").first();
cy.get(".text-xs-center ").contains("Sign up")
cy.get('input[placeholder="Username"]').type('alahammad');
cy.get('input[placeholder="Email"]').type('alahammad26@gmail.com');
cy.get('input[placeholder="Password"]').type('Aaa1234@@');  
cy.get('a').contains('Have an account?').click();
cy.contains("Sign up").last().click();
cy.contains("conduit").last().click();


})




})