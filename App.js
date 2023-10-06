import { useRef, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Message from './components/Message';

export default function App() {
  const scrollViewRef = useRef()

  const messagesBase = [
    {
      id: 1,
      sender: 1,
      content: "Bonjour c'est Elon"
    },
  ]

  const messagesRandom = [
    {
      id: 100,
      sender: 1,
      content: "Le futur que nous espérons est créé par nous-mêmes."
    },
    {
      id: 200,
      sender: 1,
      content: "La première étape pour résoudre un problème est de le reconnaître."
    },
    {
      id: 300,
      sender: 1,
      content: "Si quelque chose est important pour vous, vous devez essayer, même si les chances ne sont pas en votre faveur."
    },
    {
      id: 400,
      sender: 1,
      content: "Je pense que c'est possible d'être un milliardaire tout en restant une bonne personne."
    },
    {
      id: 500,
      sender: 1,
      content: "Nous devons penser à l'avenir et nous assurer qu'il y ait toujours des choses excitantes à attendre."
    },
    {
      id: 600,
      sender: 1,
      content: "L'innovation vient souvent des personnes qui travaillent dans l'entreprise."
    },
    {
      id: 700,
      sender: 1,
      content: "Il est important d'avoir une bonne idée, mais il est encore plus important de l'exécuter correctement."
    },
    {
      id: 800,
      sender: 1,
      content: "La persévérance est très importante. Vous ne devriez jamais abandonner à moins que vous ne soyez forcé de le faire."
    },
    {
      id: 900,
      sender: 1,
      content: "Je veux mourir sur Mars, juste pas lors de l'impact."
    },
    {
      id: 1000,
      sender: 1,
      content: "L'objectif fondamental est de changer le monde de manière positive."
    }
  ]

  const [messages, setMessages] = useState(messagesBase)
  const [inputValue, setInputValue] = useState("")

  const sendMessage = () => {
    setMessages(
      [...messages, 
        {
          id: messages.length + 1, 
          sender: 2, 
          content: inputValue
        }
      ]
    )
    setInputValue("")

    const pickRandomMessage = messagesRandom[Math.floor(Math.random() * messagesRandom.length)]
    console.log(pickRandomMessage)

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages, {
          id: messages.length + 2, 
          sender: 1,
          content: pickRandomMessage.content
        }
      ])
      scrollViewRef.current.scrollToEnd({ animated: true })
    }, 2000);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elon Musk le roi du monde</Text>
      <ScrollView 
        style={styles.scrollMessages}
        ref={scrollViewRef}
      >
        <View style={styles.messages}>
          {
            messages.map((message, key) => {
              return (
                <Message
                  message={message}
                  key={message.id}
                />
              )
            })
          }
        </View>
      </ScrollView>
      <View style={styles.form}>
        <TextInput 
          value={inputValue} 
          multiline={true}
          placeholder='Message...' 
          onChangeText={(text) => setInputValue(text)}
          style={styles.input}
          placeholderTextColor='#979797'
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={() => sendMessage()}
        >
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: 10,
    padding: 20,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1A'
  },
  title: {
    marginBottom: 22,
    marginTop: 40,
    color: '#F0F0F0',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollMessages: {
    flex: 1,
  },
  messages: {
    gap: 12,
    paddingBottom: 2,
  },
  form: {
    flex: 0,
    flexDirection: 'row',
    borderRadius: 90,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#737373',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  input: {
    flex: 1,
    color: '#F0F0F0',
  },
  sendButton: {
    
  },
  sendButtonText: {
    color: '#1364F4',
    fontWeight: 'bold',
    fontSize: 16
  }
});
