import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function myComponent(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.warn(JSON.stringify(options));
    return tree;
  };
}
