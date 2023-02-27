import { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const NewCampaignForm = () => {
  const router = useRouter();

  const [minimumContribution, setMinimumContribution] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({ from: accounts[0] });
      router.push('/');
    } catch (err) {
      setErrorMsg(err.message);
    }
    setIsLoading(false);
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)} error={errorMsg !== ''}>
      <Form.Field>
        <label>Minimum contribution</label>
        <Input
          label='Wei'
          labelPosition='right'
          placeholder='1000000'
          value={minimumContribution}
          onChange={(e) => setMinimumContribution(e.target.value)}
        />
      </Form.Field>
      <Message error header='Oops' content={errorMsg} />
      <Button type='submit' loading={isLoading} primary>
        Create
      </Button>
    </Form>
  );
};

export default NewCampaignForm;
