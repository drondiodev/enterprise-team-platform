import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with default props', () => {
    cy.mount(<Button>Click me</Button>);
    cy.get('button').should('have.text', 'Click me');
  });

  it('handles click events', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Click me</Button>);
    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('can be disabled', () => {
    cy.mount(<Button disabled>Click me</Button>);
    cy.get('button').should('be.disabled');
  });

  it('applies variant styles', () => {
    cy.mount(<Button variant="destructive">Delete</Button>);
    cy.get('button').should('have.class', 'destructive');
  });
});
