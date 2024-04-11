//Exercício 1:
// let sorvete = []
// let qual = ''
// while (qual != 4) {
//     qual = prompt('Digite o número para exercutar a tarefa:' + '\n' +  '1 - Adicionar sabor' + '\n' + '2 - Remover sabor' + '\n' +  '3 - Visualizar sabor' + '\n' +  '4 - Finalizar pedido')
//     switch (qual) {
//         case '1':
//             if(sorvete.length < 3){
//                 sorvete.push(prompt('Escolha o sabor de sorvete que deseja adicionar: '))
//             }else{
//                 alert('Número máximo de sabores atingido')
//             }
//             break;
//         case '2':
//             if (sorvete.length >= 0) {
//                 sorvete.pop
//             }
//         case '3':
//             alert(sorvete)
//             break;
//         case '4':
//             if(sorvete.length >= 1){
//                 alert('Pedido realizado')
//             }else {
//                 alert('escolha pelo menos um sabor')
//             }
//             break;
//         default:
//             alert('Digite um número válido')
//             break;
//     }
// }


//Exercício 2:
// let num = []
// for(let i = 0; i < 3; i++){
//     num.push(Numberprompt('Escolha um número: ')))
// }
// num.reverse()
// alert(num)

//Exercício 3:
// let numeros = [2, 5, 7, 9, 10]
// let soma = 0
// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i]
// }
// alert("A soma dos elementos é:" + '\n' + soma)


//Exercício 4:
// let alunos = []
// let notasTurma = []
// let maior5 = 0
// let soma = 0
// for(let i = 0; i < 3; i++){
//     alunos[i] = prompt('nome do aluno: ')
//     notasTurma[i] = []
//     let postandoNotas = true
//     while(postandoNotas) {
//         entrada = prompt(`próxima nota do aluno ${i}: `)
//         if (Number(entrada)) notasTurma[i].push(Number(entrada))
//         if (entrada == 'pare') postandoNotas = false
//     }
// }
// for(let aluno = 0; aluno < notasTurma.length; aluno++){
//     for(let nota = 0; nota < notasTurma[aluno].length; nota++ ) {
//         if(notasTurma[aluno][nota] > 5){
//             soma += notasTurma[aluno][nota]
//             maior5++
//         }
//     }
// }

// alert(soma/maior5)


//Exercício 5:
// let nums = [5, 10, 11, 12, 15]
// let maior = 0
// let indiceMaior
// for(let i = 0; i < nums.length; i++){
// if(nums[i] > maior){
//     maior = nums[i]
//     indiceMaior = i
//     }
// }
// console.log(nums[indiceMaior])


//Exercício 6
// let array1 = []
// for (let i = 0; i < 10; i++) {
//   array1.push(prompt("Digite um número: "))
// }
// let array2 = []
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] % 2 != 0) {
//     array2.push(array1[i])
//   }
// }
// alert(array2)
