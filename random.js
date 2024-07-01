const Pachinko = () => {
    const result = Math.random();
    if(result < 0.1){
        return "アタリ"
    }else {
        return "ハズレ"
    }
}

