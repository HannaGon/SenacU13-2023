function converteDiasHoras(dias){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(dias*24)
        }, 1000);
    })
}

function converteHorasMinutos(horas){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(horas*60)
        }, 1000);
    })
}

async function converteDiasMinutos(dias){
    try {
        const horas = await converteDiasHoras(dias)
        const minutos = await converteHorasMinutos(horas)

        return console.log(horas, minutos)
    } catch (error) {
        console.log(error)
    }
}

converteDiasMinutos(1)