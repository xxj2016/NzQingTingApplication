import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: [
            { path: '', redirectTo: 'choiceness', pathMatch: 'full' },
            { path: 'choiceness', loadChildren: '../../fm-modules/choiceness/choiceness.module#ChoicenessModule' }
        ]
    }
];
