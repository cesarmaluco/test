import * as React from 'react';
import {IUser, IRole} from './SignUp';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

export  class Login extends React.Component<any, IUser> {

    private showPanel: boolean = false;
    constructor(props: any, state: IUser) {
        super(props);

    }

    public render(): JSX.Element {
    

    return (
      <div >     
        <p className="ms-Panel-headerText">Login</p>  
        <div className="ms-Grid">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg12">
                  
                      <TextField label='E-mail'  />
                </div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg12">
                    <TextField label='Password' type="password" />
                </div> 
            </div>
            <div className="ms-Grid-row">
                 <DefaultButton
                    data-automation-id='test'
                    description='Login'
                    text='Login'
                />
            </div>   
        </div>
      </div>
    );
  }
}