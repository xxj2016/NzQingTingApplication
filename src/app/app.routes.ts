export const appRoutes = [
    {
        path: '',
        redirectTo: 'workspace',
        pathMatch: 'full'
    },
    {
        path: 'workspace',
        loadChildren: './global-layout/workspace/workspace.module#WorkspaceModule'
    }
];
