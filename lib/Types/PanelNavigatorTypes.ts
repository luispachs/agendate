

type PanelNavigatorTypes = {
    hasNext:boolean;
    hasPrevious:boolean;
    next:number|null;
    previous?:number|null;
    submit:true|false;
    handle:(newValue: number)=>any;
}