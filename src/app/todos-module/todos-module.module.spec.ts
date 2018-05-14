import { TodosModuleModule } from './todos-module.module';

describe('TodosModuleModule', () => {
  let todosModuleModule: TodosModuleModule;

  beforeEach(() => {
    todosModuleModule = new TodosModuleModule();
  });

  it('should create an instance', () => {
    expect(todosModuleModule).toBeTruthy();
  });
});
