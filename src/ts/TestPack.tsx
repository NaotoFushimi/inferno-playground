
export const ComponentA = ()=>{
    return (
        <div>
            Stateless Compoent
        </div>
    );
};

export const ComponentB = ()=>{

    const u = [1,2,3,4,5,6].map((num)=>{
        return (
            <div>
                row-{num} <button> remove</button>
            </div>
        );
    });

    return (
        <div>
            {u}
        </div>
    );
};
