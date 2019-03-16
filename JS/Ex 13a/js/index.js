var multiply = (function(){
   function mul(x) {
       return (y) => {
           return(z) => {
               return x*y*z;
           };
       };
   }
   return {Mul : mul};
})();