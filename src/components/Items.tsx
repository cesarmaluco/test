import * as React from 'react';


let _items: JSX.Element[];



export class Items extends React.Component<any, any> {

    private _isFetchingItems: boolean;
    private _selection: Selection;

    constructor() {
        super();

    }

    public componentWillMount() {
        this.getUsers();

    }

    public componentWillUpdate() {
        this.getUsers();
    }

    public getUsers() {
        fetch('http://localhost:1340/api/consultarMensagem', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"filtros":{}}' }).then(res => res.json()).then(data => {
            let _data = data;
            let shouldUpdate = false;
            if ( (_items) && (_items.length < _data.length))
                shouldUpdate = true;
            _items = _data.map((item: any, i: number): JSX.Element => {
                return (
                    <div key={item._id} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4">

                        {item.name}

                    </div>
                );
            });
            if (shouldUpdate)
                this.setState({ _items })
        });
    }

    public render() {


        return (
            <div className='ms-DetailsListAdvancedExample'>
                {_items}
            </div>
        );
    }


}