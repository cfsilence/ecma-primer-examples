class LocalStorage {
  constructor(key) {
    this.key = key;
  }

  set data(value) {
    localStorage.setItem( this.key, JSON.stringify(value) );
  }

  get data() {
    return JSON.parse( localStorage.getItem( this.key ) );
  }
}

window.addEventListener('load', function(){
  document.querySelector('#clicky').addEventListener('click', function(){
    const ls = new LocalStorage('test');
    ls.data = [
      { id: 1, name: 'Tyler', roles: ['admin', 'user'] },
      { id: 2, name: 'Ryan', roles: ['admin', 'user', 'superuser'] },
    ];
    console.dir( ls.data );
  });
});