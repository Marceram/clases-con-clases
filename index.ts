class Album{
    title:string;
    songs: string[];
};

class Banda {
    members:string[];
    albums: any[]

constructor(members: string[], albums: Album[]){
        this.members = members;
        this.albums = albums;
    }
}

function main(){
    const unaBanda = new Banda(["marce"], [])
}

main ()